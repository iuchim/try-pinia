import { v4 as uuidv4 } from 'uuid'

export class TodoEntry {
  constructor({ id, title, createdAt, finishedAt }) {
    this._id = id || uuidv4()
    this._title = title || 'untitled'
    this._createdAt = createdAt || Date.now()
    this._finishedAt = finishedAt || null
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get createdAt() {
    return this._createdAt
  }

  get finishedAt() {
    return this._finishedAt
  }

  get isFinished() {
    return this._finishedAt !== null
  }
}
