import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AaveSupplyAndBorrow,
  AaveWithdraw,
  OwnershipTransferred
} from "../generated/Oven/Oven"

export function createAaveSupplyAndBorrowEvent(
  supplyToken: Address,
  borrowToken: Address,
  supplyAmount: BigInt,
  borrowAmount: BigInt,
  from: Address
): AaveSupplyAndBorrow {
  let aaveSupplyAndBorrowEvent = changetype<AaveSupplyAndBorrow>(newMockEvent())

  aaveSupplyAndBorrowEvent.parameters = new Array()

  aaveSupplyAndBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "supplyToken",
      ethereum.Value.fromAddress(supplyToken)
    )
  )
  aaveSupplyAndBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowToken",
      ethereum.Value.fromAddress(borrowToken)
    )
  )
  aaveSupplyAndBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "supplyAmount",
      ethereum.Value.fromUnsignedBigInt(supplyAmount)
    )
  )
  aaveSupplyAndBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aaveSupplyAndBorrowEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )

  return aaveSupplyAndBorrowEvent
}

export function createAaveWithdrawEvent(
  token: Address,
  amount: BigInt,
  from: Address
): AaveWithdraw {
  let aaveWithdrawEvent = changetype<AaveWithdraw>(newMockEvent())

  aaveWithdrawEvent.parameters = new Array()

  aaveWithdrawEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  aaveWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  aaveWithdrawEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )

  return aaveWithdrawEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
