import { z } from "zod";

const ProductSchema = z.object({
  title: z.string().min(3),
  price: z.number().min(1),
  oldPrice: z.number().min(1).optional(),
  brand: z.string().min(3).optional(),
});

export default ProductSchema;
