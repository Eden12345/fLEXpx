user = @user if @user

json.extract! user, :id, :username
