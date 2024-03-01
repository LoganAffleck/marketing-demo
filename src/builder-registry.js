"use client";
import { builder, Builder } from "@builder.io/react";
import ProductCell from "./components/Product Cell/ProductCell";
import Hero from "./components/Hero/Hero";
import Column from "./components/Column/Column"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


Builder.registerComponent(Hero, {
  name: "Hero",
  image: "https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2Fdf486bd21b76461ba0bda2d3be2b87e0", 
  inputs: [{
    name: "image",
    type: "file",
    allowedFileTypes: ["png", "jpg", "webp"],
    defaultValue: "https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2F6e6cd748e7894630b0537e6c3c274bb8"
  },{
    name: "heading",
    type: "text",
    defaultValue: "Spring Linen"
  },{
    name: "heroText",
    type: "html",
    defaultValue: "Manifest warmer weather in back-in-stock best-sellers—made from the season’s favorite fabric."
  },{
    name: "buttonText",
    type: "text",
    defaultValue: "Shop Now"
  },{
    name: "buttonLink",
    type: "Link",
    defaultValue: "https://www.builder.io",
  }]
})


Builder.registerComponent(ProductCell, {
  name: "Product Cell",
  image: "https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2F0d427a60a4fa431aa41c23d969253ee9", 
  inputs:[
    {
      name: "Collection",
      type: "string",
      defaultValue: "Apparel",
      enum: [
        "Apparel",
        "Footwear",
      ]
    },
    {
      name: "product",
      type: "String",
      defaultValue: "Default",
      enum: [
        "Default",
        "New short sleeve t-shirt",
        "Lightweight jacket"
      ]
    }
  ]
})

Builder.registerComponent(Column,{
  name: "Column",
  image: "https://cdn.builder.io/api/v1/image/assets%2F7b95ea34e4a142b6be7a59cfbc7115f9%2F4e3860c23945477cbd01fb770ac87d02",
})

