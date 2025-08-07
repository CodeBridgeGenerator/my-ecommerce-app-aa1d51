
import { faker } from "@faker-js/faker";
export default (user,count,userIdIds,productIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
id: faker.datatype.number(""),
userId: userIdIds[i % userIdIds.length],
productId: productIdIds[i % productIdIds.length],
quantity: faker.datatype.number(""),
payment: faker.datatype.number(""),
total: faker.datatype.number(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
