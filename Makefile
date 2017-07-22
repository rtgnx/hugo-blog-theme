
all: gulp

modules: package.json
	npm install

gulp: gulpfile.js modules
	npm install -g gulp && gulp
	cp -a assets/css/highlight static/css/
