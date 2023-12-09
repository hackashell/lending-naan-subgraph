import {
  AaveSupplyAndBorrow as AaveSupplyAndBorrowEvent,
  AaveWithdraw as AaveWithdrawEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Oven/Oven"
import {
  AaveSupplyAndBorrow,
  AaveWithdraw,
  OwnershipTransferred
} from "../generated/schema"

export function handleAaveSupplyAndBorrow(
  event: AaveSupplyAndBorrowEvent
): void {
  let entity = new AaveSupplyAndBorrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.supplyToken = event.params.supplyToken
  entity.borrowToken = event.params.borrowToken
  entity.supplyAmount = event.params.supplyAmount
  entity.borrowAmount = event.params.borrowAmount
  entity.from = event.params.from

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAaveWithdraw(event: AaveWithdrawEvent): void {
  let entity = new AaveWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.from = event.params.from

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
