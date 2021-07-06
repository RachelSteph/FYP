NOTICE: Powershell is used as a terminal

```bash
# create a virtual environment
py -m venv venv

# activate virtual environment
venv/Scripts/Activate.ps1

# upgrade pip
py -m pip install --upgrade pip

# install all dependencies
pip install -r requirements.txt

# make api migrations
py manage.py makemigrations api

# make api migrations
py manage.py migrate

# create admin user
py manage.py createsuperuser --email admin@example.com --username admin

# run development server
py manage.py runserver
```

```bash
# login as admin
http POST :8000/api/auth/login/ username="admin" password="password"

# register agent
http POST :8000/api/auth/register/ username="test_agent" password="password" phone_number="123456789" user_type="AGENT"

# register client
http POST :8000/api/auth/register/ username="test_client" password="password" phone_number="987654321" user_type="CLIENT"

Set-Variable -Name TOKEN -Value "Authorization: Bearer [access token goes here]"

# access protected resource such as list of agents available
http :8000/api/agents/ $TOKEN

# book appointment
http POST :8000/api/appointments/ $TOKEN description="lorem ipsum dolor sit amet" agent="2" start_date="2020-07-06" end_date="2020-07-07"
```

| RESOURCE                         | METHOD                        | ENDPOINT     | DESCRIPTIONS                                                                                   |
| -------------------------------- | ----------------------------- | ------------ | ---------------------------------------------------------------------------------------------- |
| <code>/api/auth/register/</code> | POST                          | Register     | <code> user_type</code> field is required. It can be <code>AGENT</code> or <code>CLIENT</code> |
| <code>/api/auth/login/</code>    | POST                          | Login        |                                                                                                |
| <code>/api/auth/refresh/</code>  | POST                          | Refresh      |                                                                                                |
| <code>/api/auth/verify/</code>   | POST                          | Verify       |                                                                                                |
| <code>/api/users/</code>         | GET                           | Users        |                                                                                                |
| <code>/api/agents/</code>        | GET, POST, PUT, PATCH, DELETE | Agents       |                                                                                                |
| <code>/api/clients/</code>       | GET, POST, PUT, PATCH, DELETE | Clients      |                                                                                                |
| <code>/api/appointmnets/</code>  | GET, POST, PUT, PATCH, DELETE | Appointments |                                                                                                |
| <code>/api/projects/</code>      | GET, POST, PUT, PATCH, DELETE | Projects     |                                                                                                |
