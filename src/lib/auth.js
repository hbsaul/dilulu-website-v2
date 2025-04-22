import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Generate JWT token
export const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Verify JWT token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

// Hash password
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Compare password with hashed password
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Check if user has required role
export const hasRole = (user, requiredRoles) => {
  if (!user) return false;
  if (typeof requiredRoles === 'string') {
    return user.role === requiredRoles;
  }
  return requiredRoles.includes(user.role);
};

// Check if user can edit content
export const canEditContent = (user, content) => {
  if (!user) return false;
  
  // Admins can edit any content
  if (user.role === 'admin') return true;
  
  // Editors can edit content
  if (user.role === 'editor') return true;
  
  // Regular users cannot edit content
  return false;
};
