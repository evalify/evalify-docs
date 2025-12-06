# Labs

Manage computer labs and their network configurations.

![Labs List](/img/admin/lab/labs.png)

## Overview
The Labs section allows administrators to define computer labs (classrooms) and configure their network settings. This is essential for controlling access and monitoring within specific physical locations.

## Creating a Lab
Click **"Add Lab"** to configure a new environment.

![Lab Creation Configuration](/img/admin/lab/lab-creation.png)

### Network Configuration
When creating a lab, you must define its network boundaries:
- **Lab Name**: Unique identifier for the room (e.g., "Lab 1").
- **IP Subnet**: The CIDR block or IP range assigned to this lab (e.g., `192.168.1.0/24`).

This configuration ensures that only machines within the specified subnet are recognized as part of this lab environment.
