import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createGoods, updateGoods, deleteGoods} from '../graphql/mutations';
import { listGoods, getGoods } from '../graphql/queries';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

// 生成 API 客户端
const client = generateClient();

// 创建商品
async function addGoods(goodsDetails) {
    try {
      const response = await client.graphql({
        query: createGoods,
        variables: { 
          input: {
            Name: goodsDetails.name,
            Price: goodsDetails.price,
            ListedDate: new Date().toISOString(), // 当前日期
            Location: goodsDetails.location || '', // 如果提供的话
            Contact: goodsDetails.contact || '', // 如果提供的话
            Holder: goodsDetails.holder || '', // 如果提供的话
          }
        }
      });
      console.log('Goods created:', response.data.createGoods);
      return response.data.createGoods;
    } catch (error) {
      console.error('Error creating goods:', error);
      if (error.errors) {
        error.errors.forEach(e => console.error('GraphQL error:', e.message));
      }
      throw new Error(`Failed to add good: ${error.message}`);
    }
  }
  // 获取所有商品
  async function fetchAllGoods() {
    try {
      const response = await client.graphql({
        query: listGoods
      });
      console.log('Goods list:', response.data.listGoods.items);
      return response.data.listGoods.items;
    } catch (error) {
      console.error('Error fetching goods:', error);
      throw error;
    }
  }
  
  // 获取单个商品
  async function fetchSingleGoods(id) {
    try {
      const response = await client.graphql({
        query: getGoods,
        variables: { id }
      });
      console.log('Single goods:', response.data.getGoods);
      return response.data.getGoods;
    } catch (error) {
      console.error('Error fetching single goods:', error);
      throw error;
    }
  }
  
  // 更新商品
  async function updateGoodsItem(id, updatedDetails) {
    try {
      const response = await client.graphql({
        query: updateGoods,
        variables: { input: { id, ...updatedDetails } }
      });
      console.log('Goods updated:', response.data.updateGoods);
      return response.data.updateGoods;
    } catch (error) {
      console.error('Error updating goods:', error);
      throw error;
    }
  }
  
  // 删除商品
  async function removeGoods(id) {
    try {
      const response = await client.graphql({
        query: deleteGoods,
        variables: { input: { id } }
      });
      console.log('Goods deleted:', response.data.deleteGoods);
      return response.data.deleteGoods;
    } catch (error) {
      console.error('Error deleting goods:', error);
      throw error;
    }
}  
// 使用示例
async function exampleUsage() {
    // 创建商品
    const newGoods = await addGoods({ name: "New Product", price: 19.99 });
  
    // 获取所有商品
    const allGoods = await fetchAllGoods();
  
    // 获取单个商品
    if (newGoods.id) {
      const singleGoods = await fetchSingleGoods(newGoods.id);
  
      // 更新商品
      const updatedGoods = await updateGoodsItem(newGoods.id, { price: 24.99 });
  
      // 删除商品
      await removeGoods(newGoods.id);
    }
  }

function CustomGoodsSection(){
    const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newGoodName, setNewGoodName] = useState('');
  const [newGoodPrice, setNewGoodPrice] = useState('');
  const [newGoodLocation, setNewGoodLocation] = useState('');
  const [newGoodContact, setNewGoodContact] = useState('');
  const [newGoodHolder, setNewGoodHolder] = useState('');

  useEffect(() => {
    fetchGoods();
  }, []);

  async function fetchGoods() {
    try {
      setLoading(true);
      const goodsData = await client.graphql({ query: listGoods });
      setGoods(goodsData.data.listGoods.items);
    } catch (err) {
      console.error('Error fetching goods:', err);
      setError('Could not fetch goods');
    } finally {
      setLoading(false);
    }
  }

  async function addGoods(goodsDetails) {
    try {
      const response = await client.graphql({
        query: createGoods,
        variables: { 
          input: {
            Name: goodsDetails.name,
            Price: goodsDetails.price,
            ListedDate: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
            Location: goodsDetails.location,
            Contact: goodsDetails.contact,
            Holder: goodsDetails.holder,
          }
        }
      });
      console.log('Goods created:', response.data.createGoods);
      return response.data.createGoods;
    } catch (error) {
      console.error('Error creating goods:', error);
      if (error.errors) {
        error.errors.forEach(e => console.error('GraphQL error:', e.message));
      }
      throw new Error(`Failed to add good: ${error.message}`);
    }
  }

  const handleAddGood = async (e) => {
    e.preventDefault();
    if (!newGoodName.trim()) {
      setError('Good name cannot be empty');
      return;
    }
    if (isNaN(parseFloat(newGoodPrice)) || parseFloat(newGoodPrice) <= 0) {
      setError('Price must be a positive number');
      return;
    }
    try {
      const newGood = await addGoods({
        name: newGoodName.trim(),
        price: parseFloat(newGoodPrice),
        location: newGoodLocation.trim(),
        contact: newGoodContact.trim(),
        holder: newGoodHolder.trim()
      });
      setGoods([...goods, newGood]);
      // Reset form fields
      setNewGoodName('');
      setNewGoodPrice('');
      setNewGoodLocation('');
      setNewGoodContact('');
      setNewGoodHolder('');
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(`Failed to add new good: ${err.message}`);
      console.error('Detailed error:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Goods List</h2>
      
      <form onSubmit={handleAddGood}>
        <input
          type="text"
          value={newGoodName}
          onChange={(e) => setNewGoodName(e.target.value)}
          placeholder="Good Name"
          required
        />
        <input
          type="number"
          value={newGoodPrice}
          onChange={(e) => setNewGoodPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <input
          type="text"
          value={newGoodLocation}
          onChange={(e) => setNewGoodLocation(e.target.value)}
          placeholder="Location"
        />
        <input
          type="text"
          value={newGoodContact}
          onChange={(e) => setNewGoodContact(e.target.value)}
          placeholder="Contact"
        />
        <input
          type="text"
          value={newGoodHolder}
          onChange={(e) => setNewGoodHolder(e.target.value)}
          placeholder="Holder"
        />
        <button type="submit">Add Good</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good.id}>
            {good.Name} - ${good.Price} - {good.Location} - Listed: {good.ListedDate}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CustomGoodsSection;
