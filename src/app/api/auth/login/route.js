// File: /app/api/auth/login/route.js

"use server";

import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; // For password comparison
import ConnectMysql from "../../mysql";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const connection = await ConnectMysql();

    // Check if user exists
    const query = "SELECT * FROM users WHERE email = ?";
    const [rows] = await connection.promise().query(query, [email]);

    if (rows.length === 0) {
      console.log("No user found for email:", email);
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const user = rows[0];

    // Directly compare plaintext passwords
    if (user.password !== password) {
      console.log("Password mismatch for user:", email);
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Success
    console.log("User authenticated successfully:", user.email);
    return NextResponse.json({ message: "Login successful", user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

