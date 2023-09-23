import { z } from "zod";

const OrderSchema = z.object({
  user_id: z.string().min(3),
  total: z.number().min(1),
  products: z.number().min(1).optional(),
});

export default OrderSchema;
