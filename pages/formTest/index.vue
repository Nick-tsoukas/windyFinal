<template>
  <div>
    <form
      name="contactus"
      action="/thanks"
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      // Hidden input to check for bots
      <input type="hidden" name="form-name" value="contactus" />
      <div>
        <label for="name">Name:</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <input type="email" name="email" required />
        <label for="email">Email:</label>
      </div>
      <div>
        <textarea name="message" required></textarea>
        <label for="message">Message:</label>
      </div>
      <button type="submit" value="Send message">Send</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>
