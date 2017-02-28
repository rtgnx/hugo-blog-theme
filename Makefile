
all: gulp

modules: package.json
	npm install 
	git clone https://github.com/isagalaev/highlight.js tmp;
	cd tmp && npm install && node tools/build.js -t browser && cp \
		build/highlight.pack.js ../../static/js/hl.pack.js

gulp: gulpfile.js modules
	npm install -g gulp && gulp
