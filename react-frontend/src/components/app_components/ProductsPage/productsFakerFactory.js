
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
id: faker.lorem.sentence(1),
name: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
price: faker.lorem.sentence(1),
quantity: faker.lorem.sentence(1),
imageURL: faker.lorem.sentence(1),
category: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
