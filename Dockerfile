# Step 1: Use Nginx as the base image
FROM nginx:alpine

# Step 2: Copy your production build files into Nginx's default directory
COPY dist /usr/share/nginx/html

# Step 3: Expose port 80 (default web port)
EXPOSE 80

# Step 4: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
