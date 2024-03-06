import React, { useContext, useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import classes from "./Orders.module.css"
import { db } from '../../utility/firebase'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from "../../components/Product/ProductCard"

const Orders = () => {
  const [{ user }] = useContext(DataContext)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        })
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your orders!</h2>
          {
            orders?.length === 0 && <div style={{ padding: "20px" }}>
              You don't have orders yet!
            </div>
          }
          {/* Ordered items */}
          <div>
            {
              orders?.map((eachOrder, i) => {
                return (
                  <div key={i}>
                    <hr />
                    <p>Order Id: {eachOrder?.id}</p>
                    {
                      eachOrder?.data?.basket?.map(order => {
                        return <ProductCard
                          flex={true}
                          product={order}
                          key={order.id}
                        />
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </LayOut>
  )
}

export default Orders;