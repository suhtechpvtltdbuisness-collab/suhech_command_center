# SUH Tech Command Center
        
make it working dashboard of this, so i can put names and work assignment, department assign, meeting reminder, work done reminder, as work completed performance tracker and completion report, target achievement with all required things completed. and all much needed to control the company progress and work in one place

Made with Floot.

# Instructions

For security reasons, the `env.json` file is not pre-populated — you will need to generate or retrieve the values yourself.  

For **JWT secrets**, generate a value with:  

```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then paste the generated value into the appropriate field.  

For the **Floot Database**, download your database content as a gzipped pg_dump (.sql.gz) from the cog icon in the database view (right pane -> data -> floot data base -> cog icon on the left of the name), restore it into your own PostgreSQL database (gunzip -c database-dump.sql.gz | psql <connection string>), and then fill in the connection string value.  

**Note:** Floot OAuth will not work in self-hosted environments.  

For other external services, retrieve your API keys and fill in the corresponding values.  

Once everything is configured, you can build and start the service with:  

```
npm install -g pnpm
pnpm install
pnpm vite build
pnpm tsx server.ts
```
