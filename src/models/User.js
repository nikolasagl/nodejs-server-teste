const mongoose = require('../database')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const authConfig = require('../config/auth')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
  },
  cnpj: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    select: false,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password)
  },

  generateToken() {
    return jwt.sign({ id: this.id }, authConfig.secret, {
      expiresIn: 86400
    })
  }
}

const User = mongoose.model('User', UserSchema)

module.exports = User
