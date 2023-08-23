---
title: Requirements
lastUpdate: 2023
---

```txt
%%{init:{'theme': 'dark'}}%%
sequenceDiagram;
    participant user as User;
    participant home as Home Page;
    participant login as Login Page;
    participant register as Register Page;
    participant about as About Page;
    participant dashboard as Dashboard Page;
    participant store as Store Service;
    participant api as API(Backend);

    Note over home,about: The user can navigate through the pages without being logged in
    user->>+register: Fills up registration form
    register->>+store: Fills up registration form
    critical Validate User Details
      store->>+api: POST Request to /api/auth/register
      api->>+store: Response
    end
    user-->>+login: Fills up login form
    login-->>+api: User submits login credentials
```

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

```mermaid
%%{init:{'theme': 'forest'}}%%
sequenceDiagram
    participant web as Web Browser
    participant blog as Home Page
    participant account as Account Service
    participant mail as Mail Service
    participant db as Storage

    Note over web,db: The user must be logged in to submit blog posts
    web->>+account: Logs in using credentials
    account->>db: Query stored accounts
    db->>account: Respond with query result

    alt Credentials not found
        account->>web: Invalid credentials
    else Credentials found
        account->>-web: Successfully logged in

        Note over web,db: When the user is authenticated, they can now submit new posts
        web->>+blog: Submit new post
        blog->>db: Store post data

        par Notifications
            blog--)mail: Send mail to blog subscribers
            blog--)db: Store in-site notifications
        and Response
            blog-->>-web: Successfully posted
        end
    end
```

```

```
