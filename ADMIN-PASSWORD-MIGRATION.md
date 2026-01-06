# Migration Guide: Strong Password Update

## 🔄 Overview

This guide helps you migrate from the old weak password system to the new strong password requirements.

## 📊 What's Changed

| Aspect             | Old System    | New System                                 |
| ------------------ | ------------- | ------------------------------------------ |
| Default Password   | `admin123` ❌ | `FashionAdmin@2026!` ✅                    |
| Min Length         | None          | 12 characters                              |
| Complexity         | None          | Uppercase, lowercase, number, special char |
| Validation         | None          | Client + Server                            |
| Password Change UI | ❌ None       | ✅ Available                               |
| Environment Config | ❌ No         | ✅ Yes                                     |

## 🚨 Action Required

### For New Installations

No action needed! Follow the [ADMIN-PASSWORD-QUICK-START.md](./ADMIN-PASSWORD-QUICK-START.md)

### For Existing Installations

#### Option 1: Keep Current User, Update Password (Recommended)

If you want to keep your existing admin account:

1. **Login with your current password**

   - Go to: http://localhost:8080/admin/login
   - Use your existing credentials

2. **Change your password**

   - Navigate to: http://localhost:8080/admin/change-password
   - Enter your current password
   - Enter a new strong password
   - The system will validate in real-time

3. **Test the new password**
   - Logout
   - Login again with the new password

#### Option 2: Create Fresh Admin Account

If you want to reset everything:

1. **Backup your data** (if needed)

   ```bash
   # Export catalogues and other important data
   npx prisma studio
   ```

2. **Delete existing admin user** (optional)

   ```bash
   # Using Prisma Studio or SQL
   DELETE FROM "User" WHERE email = 'admin@fashionfabric.com';
   ```

3. **Run the new seed**

   ```bash
   npm run setup-admin
   # OR
   npm run seed
   ```

4. **Login with new credentials**
   - Email: admin@fashionfabric.com
   - Password: FashionAdmin@2026! (or your custom password)

## 📝 Step-by-Step Migration

### Step 1: Update Code

```bash
# Pull latest changes
git pull origin main

# Install dependencies (in case any were added)
npm install

# Generate Prisma client
npm run prisma:generate
```

### Step 2: Test Locally First

```bash
# Start development server
npm run dev

# Test login with your current password
# Navigate to http://localhost:8080/admin/login
```

### Step 3: Change Password

```bash
# Go to http://localhost:8080/admin/change-password
# Follow the prompts
# System will validate your new password
```

### Step 4: Verify

```bash
# Logout and login again
# Confirm everything works
# Check that old password no longer works
```

### Step 5: Update Production

```bash
# Deploy to production
# Change password there too
# Document new credentials securely
```

## 🔍 Verification Checklist

After migration, verify:

- [ ] Can login with new password
- [ ] Old password doesn't work (if changed)
- [ ] Password change page is accessible
- [ ] Strong password validation works
- [ ] All admin features still work
- [ ] Catalogues are still accessible
- [ ] Downloads still work

## 🐛 Troubleshooting

### "Cannot login with new password"

**Cause**: Browser cache or session issues

**Solution**:

```bash
# Clear browser cache
# Try incognito mode
# Check for typos (especially special characters)
```

### "Password doesn't meet requirements"

**Cause**: Password not strong enough

**Solution**:

```
Use the change password page - it shows real-time feedback
Requirements:
✅ 12+ characters
✅ Uppercase letter
✅ Lowercase letter
✅ Number
✅ Special character
```

### "Session expired" errors

**Cause**: NEXTAUTH_SECRET changed

**Solution**:

```bash
# Ensure NEXTAUTH_SECRET is set in .env
# It should be the same value as before
# Or generate a new one and restart server
```

### "Database connection error"

**Cause**: Database not accessible

**Solution**:

```bash
# Check DATABASE_URL in .env
# Ensure database is running
# Test connection with: npx prisma studio
```

## 💾 Backup & Restore

### Backup Current State

```bash
# Export database
pg_dump -U your_username -d your_database > backup.sql

# Or use Prisma Studio to export data
npx prisma studio
```

### Restore if Needed

```bash
# Restore database
psql -U your_username -d your_database < backup.sql

# Or manually re-create users in Prisma Studio
```

## 🔒 Security Best Practices

### During Migration

1. ✅ Test in development first
2. ✅ Backup production database
3. ✅ Schedule maintenance window
4. ✅ Notify admin users
5. ✅ Have rollback plan ready

### After Migration

1. ✅ Document new credentials securely
2. ✅ Remove old credentials from documentation
3. ✅ Train admins on new requirements
4. ✅ Monitor for login issues
5. ✅ Review access logs

## 📞 Support

### Need Help?

1. **Check documentation**:

   - [ADMIN-PASSWORD-SECURITY.md](./ADMIN-PASSWORD-SECURITY.md)
   - [ADMIN-PASSWORD-QUICK-START.md](./ADMIN-PASSWORD-QUICK-START.md)

2. **Common issues**:

   - Check this troubleshooting section
   - Review error messages
   - Check browser console for errors

3. **Contact support**:
   - Create an issue on GitHub
   - Contact system administrator
   - Check application logs

## 📈 Rollback Plan

If critical issues occur:

### Rollback Code Only

```bash
# Revert to previous commit
git revert HEAD

# Or checkout previous version
git checkout <previous-commit-hash>

# Redeploy
```

### Rollback Database

```bash
# Restore from backup
psql -U your_username -d your_database < backup.sql

# Or manually reset password
# (requires direct database access)
```

### Emergency Admin Access

If locked out:

1. **Via Database**:

   ```sql
   -- Reset to a known password hash
   UPDATE "User"
   SET password = '$2a$12$...'
   WHERE email = 'admin@fashionfabric.com';
   ```

2. **Via Seed Script**:
   ```bash
   # Delete existing user
   # Run seed again
   npm run setup-admin
   ```

## ✅ Post-Migration Tasks

- [ ] All admins have changed passwords
- [ ] Old passwords documented and destroyed
- [ ] New passwords stored securely
- [ ] Documentation updated
- [ ] Training completed
- [ ] Monitoring in place
- [ ] Backup strategy confirmed

## 📊 Migration Timeline

**Recommended Timeline**:

- **Day 0**: Review this guide and plan migration
- **Day 1**: Test in development environment
- **Day 2**: Backup production and deploy
- **Day 3**: All admins change passwords
- **Day 7**: Verify all systems working
- **Day 30**: Review and document lessons learned

## 🎯 Success Criteria

Migration is successful when:

- ✅ All admins can login with new passwords
- ✅ Old weak passwords no longer work
- ✅ Password change UI functions properly
- ✅ All features work as before
- ✅ No security issues introduced
- ✅ Documentation is updated

---

**Need immediate assistance?** Contact your system administrator.

**Last Updated**: January 6, 2026
