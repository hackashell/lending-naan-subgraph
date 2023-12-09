import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AaveSupplyAndBorrow } from "../generated/schema"
import { AaveSupplyAndBorrow as AaveSupplyAndBorrowEvent } from "../generated/Oven/Oven"
import { handleAaveSupplyAndBorrow } from "../src/oven"
import { createAaveSupplyAndBorrowEvent } from "./oven-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let supplyToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let borrowToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let supplyAmount = BigInt.fromI32(234)
    let borrowAmount = BigInt.fromI32(234)
    let from = Address.fromString("0x0000000000000000000000000000000000000001")
    let newAaveSupplyAndBorrowEvent = createAaveSupplyAndBorrowEvent(
      supplyToken,
      borrowToken,
      supplyAmount,
      borrowAmount,
      from
    )
    handleAaveSupplyAndBorrow(newAaveSupplyAndBorrowEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AaveSupplyAndBorrow created and stored", () => {
    assert.entityCount("AaveSupplyAndBorrow", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AaveSupplyAndBorrow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "supplyToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AaveSupplyAndBorrow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AaveSupplyAndBorrow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "supplyAmount",
      "234"
    )
    assert.fieldEquals(
      "AaveSupplyAndBorrow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowAmount",
      "234"
    )
    assert.fieldEquals(
      "AaveSupplyAndBorrow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "from",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
