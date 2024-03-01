"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import {Image} from '@builder.io/react';

function ProductCell(props) {

  if(props.product == "New short sleeve t-shirt"){
    console.log("Product is t-shirt", props.product)
    return(
      <div className={styles.products}>
      <div className={styles.productBox}>
          <Image className={styles.productImage} image="https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2Fbbb28710ff8b434f982faa54e3aadecd" alt="Product"/>
          <p className={styles.productTitle}>Natural fit</p>
          <p className={styles.price}>$45.99</p>
      </div>
      <div className={styles.productBox}>
          <Image className={styles.productImage} image="https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2F2d8974eada494a17b3886e90bfcd2344" alt="Product"/>
          <p className={styles.productTitle}>Short sleeved t-shirt</p>
          <p className={styles.price}>$45.99</p>
      </div>
      <div className={styles.productBox}>
          <Image className={styles.productImage} image="https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2F6484963fa6c6412293f94d97767e51f8" alt="Product"/>
          <p className={styles.productTitle}>The essential organic crew</p>
          <p className={styles.price}>$30</p>
      </div>
    </div>
    )
  }

  else{
    console.log("product is", props.product)
    return(
      <div className={styles.products}>
      <div className={styles.productBox}>
          <Image className={styles.productImage} image="https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2F4e4c2eae993c49fba4a90a1fec6b00ca" alt="Product"/>
          <p className={styles.productTitle}>No product selected</p>
          <p className={styles.price}>$00.00</p>
      </div>
      <div className={styles.productBox}>
          <Image className={styles.productImage} image="https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2F4e4c2eae993c49fba4a90a1fec6b00ca" alt="Product"/>
          <p className={styles.productTitle}>No product selected</p>
          <p className={styles.price}>$00.00</p>
      </div>
      <div className={styles.productBox}>
          <Image className={styles.productImage} image="https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2F4e4c2eae993c49fba4a90a1fec6b00ca" alt="Product"/>
          <p className={styles.productTitle}>No product selected</p>
          <p className={styles.price}>$00.00</p>
      </div>
    </div>
    )
  };
}

export default ProductCell;