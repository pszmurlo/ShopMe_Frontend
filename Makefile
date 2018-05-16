YARN_INSTALL_ARGS =

all: build

setup:
	@[ -f /.dockerenv ] && yarn install $(YARN_INSTALL_ARGS) || true

test: setup
	yarn eslint; \
	CI=true yarn test; \

build: test
	yarn build

.PHONY: all setup test build
