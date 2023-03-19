# Use a lightweight Alpine Linux image as the base
FROM alpine:latest

# Install required packages
RUN apk add --no-cache nginx

# Copy the website files to the appropriate directory
COPY nginx.conf /etc/nginx/nginx.conf
COPY favicon.ico index.html /usr/share/nginx/html/
COPY js /usr/share/nginx/html/js/
COPY meta /usr/share/nginx/html/meta/
COPY style /usr/share/nginx/html/style/

# Expose port 80 to allow access to the website
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]
