# 1. Getting Started

## 1.1. What Is Docker

![img.png](misc/docker.png)

- Platform for building, running and shipping applications.
- Developers can easily build and deploy applications running in **containers**.
- Container is like a running instance of our application, packaged up and running within a container.
- Local development is the same across any environment.
  - There are scenarios where the application may work on your local machine, but doesn't work on development, staging or production environment, because of hardware issues, installation problems etc.
  - Docker abstracts and solves all of those problems so that it always works on every environment and every machine.
- Docker is also used a lot for CI/CD (Continuous Integration/Continuous Delivery) workflows.

## 1.2. Docker vs VM

### 1.2.1. Virtual Machine (VM)

- **Virtual Machines (VMs)** are an abstraction of physical hardware turning one **server** into **many servers**.
- The **hypervisor** allows multiple VMs to run on a single machine.
- Each VM includes a **full copy** of an operating system, the application, necessary binaries and libraries – taking up tens of GBs.
- VMs can also be slow to boot, whereas with Docker containers are very fast to boot.

![img.png](misc/vms.png)
- Each VM consists of:
  - Infrastructure
  - Hypervisor
  - VM (application) running on a Linux OS (this can have multiple copies, each one running the application).

### 1.2.2. Docker

- Docker runs your applications in something called **containers**.
- **Containers** are an abstraction at the app layer that packages code and dependencies together.
- Multiple containers can run on the same machine and share the OS kernel with other containers, each running as isolated processes in user space.
- Containers take up less space than VMs (container images are typically tens of MBs in size), can handle more applications and require fewer VMs and operating systems.

![img.png](misc/docker-2.png)
- Each container consists of:
  - Infrastructure
  - Host operating system
  - Docker
  - Application (which can have multiple copies).

### 1.2.3. Docker vs VM

![img.png](misc/docker-vs-vm.png)

- The key difference is the host operating system.
- VM has 3 copies while Docker only has 1.
- Therefore, we gain more performance using Docker.

### 1.2.4. The Difference

| Docker                           | VM                         |
|----------------------------------|----------------------------|
| Portable                         | Requires more memory       |
| Requires less memory             | Each VM runs on its own OS |
| All containers share the same OS | Startup time in minutes    |
| Startup time in milliseconds     | More secure                |
| Process level isolation          | Less popular these days    |
| Very popular                     |                            |

## 1.3. Installing Docker

- Install docker on https://docker.com/ and follow installation instructions.

## 1.4. Exploring Docker Dashboard

- **Containers / Apps tab:**
  - This is where the applications we built will be running.
  - Initially there shouldn't be anything listed.
- **Images tab:**
  - These are the images either on your local machine or remote repositories (Docker registries).
- **Volumes tab:**
  - This is used, so you can share data between host and containers.
- **Dev Environments:**
  - Define your project's configuration as code, distribute your project easily amongst your team, and have everyone work on the same code and any dependencies with one click.

## 1.5. Tools

Useful tools and resources to know and install that will be helpful in using Docker:
- Knowledge of: terminal, bash & Vim
- https://gitforwindows.org/ (Windows)
- https://cmder.app/
- https://iterm2.com/ (Mac)
