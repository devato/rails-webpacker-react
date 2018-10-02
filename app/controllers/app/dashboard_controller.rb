class App::DashboardController < ApplicationController
  before_action :authenticate_user!
  layout 'app'
  def index
  end
end
