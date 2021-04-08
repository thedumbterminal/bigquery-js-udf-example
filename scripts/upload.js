const path = require('path')
const { Storage } = require('@google-cloud/storage')

const storage = new Storage()

const createBucketIfNeeded = async (bucketName) => {
  try {
    await storage.createBucket(bucketName)
  } catch (e) {
    if (e.message !== 'Sorry, that name is not available. Please try a different one.') throw e
  }
  return storage.bucket(bucketName)
}

const uploadFile = (bucket, dest, source) => {
  return bucket.upload(source, {
    destination: path.join(dest, source)
  })
}

const upload = async () => {
  const bucketName = process.env.DEST_BUCKET
  if (!bucketName) throw new Error('DEST BUCKET env var not set')
  const bucket = await createBucketIfNeeded(bucketName)
  await uploadFile(bucket, 'bigquery-js-udf-example', 'dist/dist.js')
}

upload()
  .catch((e) => {
    console.error(e.message)
    process.exit(1)
  })
  .then(() => {
    console.log('...Success')
  })
