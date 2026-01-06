# Admin Password Security

## Strong Password Requirements

All admin accounts must use strong passwords that meet the following criteria:

### Password Requirements

- **Minimum Length**: 12 characters
- **Uppercase Letters**: At least one (A-Z)
- **Lowercase Letters**: At least one (a-z)
- **Numbers**: At least one (0-9)
- **Special Characters**: At least one (!@#$%^&\*()\_+-=[]{}|;:,.<>?)

### Default Admin Account

The system creates a default admin account during database seeding:

- **Email**: `admin@fashionfabric.com`
- **Default Password**: `FashionAdmin@2026!`

⚠️ **IMPORTANT**: Change the default password immediately after first login!

## Setting Up Admin Password

### Method 1: Using Environment Variable (Recommended)

Set a custom admin password before running the seed:

```bash
# Windows PowerShell
$env:ADMIN_PASSWORD = "YourStrong@Password123!"
npm run seed

# Linux/Mac
ADMIN_PASSWORD="YourStrong@Password123!" npm run seed
```

### Method 2: Change Password After Login

1. Log in with the default credentials
2. Navigate to: `/admin/change-password`
3. Enter your current password
4. Enter and confirm your new strong password
5. The system will validate password strength in real-time

## Password Change Process

### Via Admin Panel

1. Go to `/admin/change-password`
2. Enter current password
3. Enter new password (must meet requirements)
4. Confirm new password
5. Submit

The page includes:

- Real-time password strength indicator
- Visual feedback for each requirement
- Password match validation

### Via API

**Endpoint**: `POST /api/auth/change-password`

**Headers**:

```json
{
  "Content-Type": "application/json"
}
```

**Body**:

```json
{
  "currentPassword": "current_password",
  "newPassword": "new_strong_password"
}
```

**Response** (Success):

```json
{
  "message": "Password changed successfully"
}
```

**Response** (Error):

```json
{
  "error": "Password does not meet security requirements",
  "details": [
    "Password must be at least 12 characters long",
    "Password must contain at least one uppercase letter"
  ]
}
```

## Security Features

### Password Hashing

- Uses bcrypt with 12 rounds (increased from default 10)
- Each password is salted automatically
- Hashes are one-way (cannot be decrypted)

### Password Validation

- Client-side validation for immediate feedback
- Server-side validation to prevent bypass
- Cannot reuse current password
- Validates on registration and password change

### Session Security

- JWT-based sessions
- Server-side session validation
- Automatic session expiration

## Password Utilities

The system includes utility functions in `lib/password-validation.ts`:

### `validatePasswordStrength(password: string)`

Returns validation result with specific error messages.

### `getPasswordStrength(password: string)`

Returns password strength level (0-5) with label and color.

### `generateStrongPassword(length: number)`

Generates a cryptographically secure random password.

## Best Practices

1. **Never share passwords** via email, chat, or insecure channels
2. **Use unique passwords** - don't reuse passwords from other sites
3. **Change passwords regularly** - at least every 90 days
4. **Use a password manager** to generate and store complex passwords
5. **Enable 2FA** if implementing additional security layers
6. **Never commit passwords** to version control
7. **Use environment variables** for sensitive credentials

## For Developers

### Adding Password Validation to New Endpoints

```typescript
import { validatePasswordStrength } from "@/lib/password-validation";

const validation = validatePasswordStrength(password);
if (!validation.isValid) {
  return NextResponse.json(
    {
      error: "Password does not meet security requirements",
      details: validation.errors,
    },
    { status: 400 }
  );
}
```

### Testing Password Strength

```typescript
import { getPasswordStrength } from "@/lib/password-validation";

const strength = getPasswordStrength("MyPassword123!");
console.log(strength.label); // "Good"
console.log(strength.level); // 4
console.log(strength.color); // "text-green-600"
```

## Troubleshooting

### Cannot Log In After Password Change

- Ensure you're using the correct new password
- Check for copy-paste errors (extra spaces)
- Clear browser cache and cookies
- Try in incognito/private mode

### Password Requirements Not Met

- Use the password change page for real-time validation
- Check each requirement individually
- Ensure no spaces at the beginning or end

### Forgot Password

Currently, password reset must be done manually:

1. Access the database directly
2. Run the seed script to reset to default
3. Log in and change password immediately

## Future Enhancements

Potential security improvements:

- [ ] Password history (prevent reusing last 5 passwords)
- [ ] Account lockout after failed attempts
- [ ] Two-factor authentication (2FA)
- [ ] Password expiration policy
- [ ] Email-based password reset flow
- [ ] Login notification emails
- [ ] IP-based access restrictions

## Support

For security concerns or password issues, contact the system administrator.

⚠️ **Security Notice**: Never share your admin password or security concerns via public channels.
