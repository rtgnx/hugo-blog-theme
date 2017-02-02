
all: gulp

modules: package.json
	npm install 

gulp: gulpfile.js modules
	npm install -g gulp && gulp
