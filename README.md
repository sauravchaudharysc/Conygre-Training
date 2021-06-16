## Services of AWS Used : 

**Storage :** S3

**Compute :** EC2

**Security Identity & Compilance :** IAM

**Machine Learning :** Amazon SageMaker 

### Storage (AMAZON S3)

Amazon simple storage services (Amazon S3) is a storage service that allows enterprises/individuals to store and protect any amount of data. It is built to be extremely simple and robust. 

• Amazon S3 allows customers to store data in buckets or directories (much like folders).

• A bucket is a container for objects stored in Amazon S3. Every object is contained in a bucket. 

• Each of the buckets will have **global (universal) unique name**.So you cannot have the same bucket name as somebody else!

• You can store an infinite amount of data in a bucket in which each object can contain up to 5 TB of data.

•For example, if we have an object **images/boruto.jpg** is stored in the **naruto** bucket, use can use the following URL to access it:

 **http://mitchsteve.s3.amazonaws.com/images/boruto.jpg**

**Features**

1. Scalability

2. Data availability

3. Security

4. Performance 

### Compute (AMAZON EC2)

Instead of buying physical hardware , we can simply rent these services by leveraging EC2. 

**Pricing **

- **On-Demand**

  With On-Demand instances, you pay for compute capacity by the hour or the second depending on which instances you run. No longer-term commitments or upfront payments are needed. You can increase or decrease your compute capacity depending on the demands of your application and only pay the specified per hourly rates for the instance you use.

- **Spot Instances**

  A spot offers a lower price compared to an on-Demand instance. The spot instance will run when capacity permits.You can purchase Spot Instances at prices up to 90% lower than On-Demand instances. 

- **Reserved Instances**

  Reserved Instances provide you with a significant discount (up to 75%) compared to On-Demand instance pricing. In addition, when Reserved Instances are assigned to a specific Availability Zone, they provide a capacity reservation, giving you additional confidence in your ability to launch instances when you need them.

- **Dedicated Hosts**

  A Dedicated Host is a physical EC2 server dedicated for your use. Dedicated Hosts can help you reduce costs by allowing you to use your existing server-bound software licenses, including Windows Server, SQL Server, and SUSE Linux Enterprise Server (subject to your license terms), and can also help you meet compliance requirements. 

### **Security Identity & Compilance (IAM)**

AWS Identity and Access Management (IAM) allows users to securely access and manage AWS services. IAM allows you to create
• Users
• Groups
• Roles
• Policies

### Machine Learning (AMAZON SageMaker)

A machine learning Integrated Development Environment (IDE) for building, training, and debugging models, tracking experiments, deploying models, and monitoring their performance.

![image-20210616234453490](C:\Users\Saurav Chaudhary\AppData\Roaming\Typora\typora-user-images\image-20210616234453490.png)

