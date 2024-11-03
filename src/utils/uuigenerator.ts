import { v4 as uuidv4 } from "uuid";

export class UUIDGenerator {
  generate() {
    const value = uuidv4();
    return value;
  }
}
