const config = {
 env: process.env.NODE_ENV || 'development',
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
 mongoUri: process.env.MONGODB_URI || mongodb+srv://bruce_wiseman:BruceW1seman@cluster0.imavv.mongodb.net/serverDB?retryWrites=true&w=majority ||
 process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' +
 (process.env.MONGO_PORT || '27017') +
 '/mernproject'
}
export default config