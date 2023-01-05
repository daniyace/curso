import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { AppContext } from '../AppContext';

const navOptions = [
  { link: '/', text: 'Inicio' },
  { link: '/productos', text: 'Productos' },
];

const Productos = () => {
  const { categoriasContext } = useContext(AppContext);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState('');

  useEffect(() => {
    const getCategorias = async () => {
      /* axios
        .get('https://api.escuelajs.co/api/v1/categories')
        .then((result) => {
          console.log('result', result);
          setCategorias(result.data);
        })
        .catch((error) => {
          alert('Error al obtener las categorias');
        })
        .finally(() => {
          console.log('Finalizado');
        }); */
      try {
        const result = await axios.get(
          'https://api.escuelajs.co/api/v1/categories'
        );
        console.log('result', result);
        setCategorias(result.data);
      } catch (error) {
        alert('Error al obtener las categorias');
      } finally {
        console.log('Finalizado');
      }
    };
    getCategorias();
  }, []);

  useEffect(() => {
    const getProductosByCategory = async () => {
      try {
        const { data } = await axios.get(
          `https://api.escuelajs.co/api/v1/products`
        );
        setProductos(
          data.filter((producto) => producto.category.id === categoriaActual)
        );
      } catch (error) {
        alert('Error al obtener los productos');
      } finally {
        console.log('Finalizado');
      }
    };
    if (categoriaActual !== '') getProductosByCategory();
  }, [categoriaActual]);

  const limpiar = () => {
    setCategoriaActual('');
    setProductos([]);
  };

  const crear = async () => {
    try {
      const { data } = await axios.post(
        `https://api.escuelajs.co/api/v1/products`,
        {
          title: 'New Product',
          price: 10,
          description: 'A description',
          categoryId: 1,
          images: ['https://placeimg.com/640/480/any'],
        }
      );
      console.log('data', data);
    } catch (error) {
      alert('Error al crear el producto');
    }
  };

  return (
    <Layout navOptions={navOptions}>
      <p>local</p>
      {categorias.map((categoria, index) => (
        <div
          className='btn btn-outline-dark mx-2'
          key={index}
          onClick={() => setCategoriaActual(categoria.id)}
        >
          {categoria.name}
        </div>
      ))}
      <p>contexto</p>
      {categoriasContext.map((categoria, index) => (
        <div
          className='btn btn-outline-dark mx-2'
          key={index}
          onClick={() => setCategoriaActual(categoria.id)}
        >
          {categoria.name}
        </div>
      ))}

      <p className='my-2'>Categoria actual: {categoriaActual || 'ninguna'}</p>
      <div className='btn btn-outline-dark my-2' onClick={limpiar}>
        Limpiar
      </div>
      <div className='btn btn-outline-dark my-2' onClick={crear}>
        Crear producto
      </div>
      {productos.map((producto, index) => (
        <p key={index}>{producto.title}</p>
      ))}
    </Layout>
  );
};

export default Productos;
