source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'rails', '~> 5.2'
gem 'sqlite3', "~> 1.3"
gem 'puma', '~> 3.12'
gem 'webpacker', "~> 3.5"
gem 'devise', "~> 4.5"
gem 'bootsnap', '~> 1.3', require: false
gem 'fast_jsonapi'

group :development, :test do
  gem 'byebug', "~> 10.0", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '~> 3.7'
  gem 'listen', '~> 3.1', '< 3.2'
  gem 'spring', "~> 2.0"
  gem 'spring-watcher-listen', '~> 2.0'
end
