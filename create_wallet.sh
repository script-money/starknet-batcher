#!/bin/bash

# Check if an argument was provided
if [ $# -eq 0 ]; then
    echo "No arguments provided"
    exit 1
fi

# Create a new directory and enter it
mkdir -p ~/.starkli-wallets/$1
cd ~/.starkli-wallets/$1

# Set environment variables
export STARKNET_KEYSTORE=~/.starkli-wallets/$1/keystore.json
export STARKNET_RPC=https://free-rpc.nethermind.io/sepolia-juno/v0_6
export STARKNET_ACCOUNT=~/.starkli-wallets/$1/account.json

# Prompt for password
echo "Please enter the password:"
read -s password

# Create a new keystore file
starkli signer keystore new $STARKNET_KEYSTORE --password $password

# Initialize a new Argent account
starkli account argent init $STARKNET_ACCOUNT --keystore-password $password

# Deploy the account
starkli account deploy $STARKNET_ACCOUNT --keystore-password $password