class V1::GreetingsController < ApplicationController
  def index
    greetings = Greeting.all.order('random()').first
    render json: greetings, status: :ok
  end
end
