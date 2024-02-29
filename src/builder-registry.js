"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ProductCell from "./components/Product Cell/ProductCell";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


Builder.registerComponent(ProductCell, {
  name: "Product Cell",
  image: "https://unpkg.com/@tabler/icons-png@2.47.0/icons/shopping-bag.png", 
})
