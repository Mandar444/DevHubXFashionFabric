# Quick Start: Admin Password Setup

## 🚀 Fast Setup

### Option 1: Interactive Setup (Recommended)

```bash
npm run setup-admin
```

This will:

1. Prompt you to create a custom strong password
2. Validate password requirements
3. Seed the database with secure credentials
4. Display login information

### Option 2: Use Default Strong Password

```bash
npm run seed
```

**Default Credentials:**

- Email: `admin@fashionfabric.com`
- Password: `FashionAdmin@2026!`

⚠️ **Change immediately after first login!**

### Option 3: Custom Password via Environment Variable

```bash
# Set your password
$env:ADMIN_PASSWORD = "YourCustom@Password123!"

# Run seed
npm run seed
```

## 📝 Password Requirements

Your password MUST include:

- ✅ At least 12 characters
- ✅ One uppercase letter (A-Z)
- ✅ One lowercase letter (a-z)
- ✅ One number (0-9)
- ✅ One special character (!@#$%^&\*()\_+-=[]{}|;:,.<>?)

## 🔐 First Login

1. Start the application:

   ```bash
   npm run dev
   ```

2. Navigate to: http://localhost:8080/admin/login

3. Login with your credentials

4. **IMPORTANT**: Change your password immediately:
   - Go to: http://localhost:8080/admin/change-password
   - Or click "Change Password" in admin menu

## ✨ Password Change Page Features

- 🎯 Real-time password strength meter
- ✅ Live validation feedback
- 🔍 Visual requirement checklist
- 🔒 Secure server-side validation

## 🛡️ Security Features

- **Bcrypt hashing** with 12 rounds
- **Strong validation** on client and server
- **Cannot reuse** current password
- **Secure sessions** with JWT

## 📚 More Information

For detailed security documentation, see: [ADMIN-PASSWORD-SECURITY.md](./ADMIN-PASSWORD-SECURITY.md)

## 🆘 Need Help?

### Common Issues

**"Password does not meet requirements"**

- Check each requirement carefully
- Use the change password page for real-time feedback
- No spaces at start or end

**"Cannot login"**

- Verify you're using the correct password
- Check for copy-paste errors
- Try in incognito mode

**"Seed failed"**

- Ensure database is running
- Check DATABASE_URL in .env
- Verify database credentials

### Support

For security concerns, contact your system administrator.

---

**Last Updated**: January 2026
