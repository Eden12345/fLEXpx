users = @users if @users

json.array! users.pluck(:id)
