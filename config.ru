require 'rubygems'
require 'sinatra'

set :public, '.'

get '/' do
  redirect '/showcase.html'
end

run Sinatra::Application
