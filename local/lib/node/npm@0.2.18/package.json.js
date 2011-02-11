module.exports = {
  "name": "npm",
  "description": "A package manager for node",
  "keywords": [
    "package manager",
    "modules",
    "install",
    "package.json"
  ],
  "version": "0.2.18",
  "homepage": "http://npmjs.org/",
  "author": {
    "name": "Isaac Z. Schlueter",
    "email": "i@izs.me",
    "url": "http://blog.izs.me"
  },
  "contributors": [
    {
      "name": "Steve Steiner",
      "email": "ssteinerX@gmail.com",
      "url": "http://websaucesoftware.com/blog/"
    },
    {
      "name": "Mikeal Rogers",
      "email": "mikeal.rogers@gmail.com",
      "url": "http://www.mikealrogers.com/"
    },
    {
      "name": "Aaron Blohowiak",
      "email": "aaron.blohowiak@gmail.com",
      "url": "http://aaronblohowiak.com/"
    },
    {
      "name": "Martyn Smith",
      "email": "martyn@dollyfish.net.nz",
      "url": "http://dollyfish.net.nz/"
    },
    {
      "name": "Mathias Pettersson",
      "email": "mape@mape.me",
      "url": "http://mape.me/"
    },
    {
      "name": "Brian Hammond",
      "email": "brian@fictorial.com",
      "url": "http://fictorial.com/"
    },
    {
      "name": "Charlie Robbins",
      "email": "charlie.robbins@gmail.com",
      "url": "http://www.charlierobbins.com/"
    },
    {
      "name": "Francisco Treacy",
      "email": "francisco.treacy@gmail.com",
      "url": "http://franciscotreacy.com/"
    },
    {
      "name": "Cliffano Subagio",
      "email": "cliffano@gmail.com",
      "url": "http://blog.cliffano.com/"
    },
    {
      "name": "Christian Eager",
      "email": "christian.eager@nokia.com",
      "url": "http://perpenduum.com"
    },
    {
      "name": "Dav Glass",
      "email": "davglass@gmail.com",
      "url": "http://blog.davglass.com"
    },
    {
      "name": "Alex K. Wolfe",
      "email": "alexkwolfe@gmail.com"
    },
    {
      "name": "James Sanders",
      "email": "jimmyjazz14@gmail.com",
      "url": "http://james-sanders.com/"
    },
    {
      "name": "Reid Burke",
      "email": "me@reidburke.com",
      "url": "http://reidburke.com/"
    },
    {
      "name": "Arlo Breault",
      "email": "arlolra@gmail.com",
      "url": "http://thoughtherder.com/"
    },
    {
      "name": "Timo Derstappen",
      "email": "teemow@gmail.com",
      "url": "http://teemow.com"
    },
    {
      "name": "Bradley Meck",
      "email": "bradley.meck@gmail.com"
    },
    {
      "name": "Bart Teeuwisse",
      "email": "bart.teeuwisse@thecodemill.biz",
      "url": "http://thecodemill.biz/"
    },
    {
      "name": "Ben Noordhuis",
      "email": "info@bnoordhuis.nl",
      "url": "http://bnoordhuis.nl/"
    },
    {
      "name": "Tor Valamo",
      "email": "tor.valamo@gmail.com",
      "url": "http://www.magnimedia.no/"
    },
    {
      "name": "Whyme.Lyu",
      "email": "5longluna@gmail.com",
      "url": "http://whyme.kuantu.com/"
    },
    {
      "name": "Olivier Melcher",
      "email": "olivier.melcher@gmail.com"
    },
    {
      "name": "Tomaž Muraus",
      "email": "kami@k5-storitve.net",
      "url": "http://www.tomaz-muraus.info"
    },
    {
      "name": "Evan Meagher",
      "email": "evan.meagher@gmail.com",
      "url": "http://evanmeagher.net/"
    },
    {
      "name": "Orlando Vazquez",
      "email": "ovazquez@gmail.com",
      "url": "http://2wycked.net/"
    },
    {
      "name": "George Miroshnykov",
      "email": "gmiroshnykov@lohika.com"
    }
  ],
  "repository": {
    "type": "git",
    "url": "http://github.com/isaacs/npm.git"
  },
  "bugs": {
    "email": "npm-@googlegroups.com",
    "url": "http://github.com/isaacs/npm/issues"
  },
  "directories": {
    "doc": "./doc",
    "man": "./man1",
    "lib": "./lib",
    "bin": "./bin"
  },
  "engines": {
    "node": ">=0.2.3"
  },
  "scripts": {
    "test": "make test",
    "postinstall": "./scripts/install-message.sh"
  },
  "licenses": [
    {
      "type": "MIT",
      "url": "http://github.com/isaacs/npm/raw/master/LICENSE"
    }
  ],
  "_id": "npm@0.2.18",
  "_engineSupported": true,
  "_npmVersion": "0.2.17",
  "_nodeVersion": "v0.3.8",
  "modules": {
    "activate.js": "lib/activate.js",
    "adduser.js": "lib/adduser.js",
    "autoremove.js": "lib/autoremove.js",
    "build.js": "lib/build.js",
    "bundle.js": "lib/bundle.js",
    "cache.js": "lib/cache.js",
    "completion.js": "lib/completion.js",
    "config.js": "lib/config.js",
    "deactivate.js": "lib/deactivate.js",
    "deprecate.js": "lib/deprecate.js",
    "docs.js": "lib/docs.js",
    "edit.js": "lib/edit.js",
    "explore.js": "lib/explore.js",
    "faq.js": "lib/faq.js",
    "get.js": "lib/get.js",
    "help.js": "lib/help.js",
    "init.js": "lib/init.js",
    "install.js": "lib/install.js",
    "link.js": "lib/link.js",
    "ls.js": "lib/ls.js",
    "outdated.js": "lib/outdated.js",
    "owner.js": "lib/owner.js",
    "publish.js": "lib/publish.js",
    "rebuild.js": "lib/rebuild.js",
    "repl.js": "lib/repl.js",
    "restart.js": "lib/restart.js",
    "run-script.js": "lib/run-script.js",
    "set.js": "lib/set.js",
    "start.js": "lib/start.js",
    "stop.js": "lib/stop.js",
    "tag.js": "lib/tag.js",
    "test.js": "lib/test.js",
    "uninstall.js": "lib/uninstall.js",
    "unpublish.js": "lib/unpublish.js",
    "update-dependents.js": "lib/update-dependents.js",
    "update.js": "lib/update.js",
    "version.js": "lib/version.js",
    "view.js": "lib/view.js",
    "xmas.js": "lib/xmas.js",
    "utils/abbrev.js": "lib/utils/abbrev.js",
    "utils/async-map.js": "lib/utils/async-map.js",
    "utils/base64.js": "lib/utils/base64.js",
    "utils/chain.js": "lib/utils/chain.js",
    "utils/default-config.js": "lib/utils/default-config.js",
    "utils/default.npmignore": "lib/utils/default.npmignore",
    "utils/error-handler.js": "lib/utils/error-handler.js",
    "utils/exec.js": "lib/utils/exec.js",
    "utils/fetch.js": "lib/utils/fetch.js",
    "utils/find.js": "lib/utils/find.js",
    "utils/get.js": "lib/utils/get.js",
    "utils/graceful-fs.js": "lib/utils/graceful-fs.js",
    "utils/ini-parser.js": "lib/utils/ini-parser.js",
    "utils/ini.js": "lib/utils/ini.js",
    "utils/lifecycle.js": "lib/utils/lifecycle.js",
    "utils/link.js": "lib/utils/link.js",
    "utils/load-package-defaults.js": "lib/utils/load-package-defaults.js",
    "utils/log.js": "lib/utils/log.js",
    "utils/mkdir-p.js": "lib/utils/mkdir-p.js",
    "utils/output.js": "lib/utils/output.js",
    "utils/parse-args.js": "lib/utils/parse-args.js",
    "utils/promise-chain.js": "lib/utils/promise-chain.js",
    "utils/prompt.js": "lib/utils/prompt.js",
    "utils/proto-list.js": "lib/utils/proto-list.js",
    "utils/read-installed.js": "lib/utils/read-installed.js",
    "utils/read-json.js": "lib/utils/read-json.js",
    "utils/registry.js": "lib/utils/registry.js",
    "utils/relativize.js": "lib/utils/relativize.js",
    "utils/rm-rf.js": "lib/utils/rm-rf.js",
    "utils/semver.js": "lib/utils/semver.js",
    "utils/set.js": "lib/utils/set.js",
    "utils/sha.js": "lib/utils/sha.js",
    "utils/sys.js": "lib/utils/sys.js",
    "utils/uuid.js": "lib/utils/uuid.js",
    "utils/which.js": "lib/utils/which.js",
    "utils/write-shim.js": "lib/utils/write-shim.js",
    "utils/completion/contains-single-match.js": "lib/utils/completion/contains-single-match.js",
    "utils/completion/get-completions.js": "lib/utils/completion/get-completions.js",
    "utils/completion/installed-packages.js": "lib/utils/completion/installed-packages.js",
    "utils/completion/remote-packages.js": "lib/utils/completion/remote-packages.js",
    "utils/completion/users.js": "lib/utils/completion/users.js",
    "utils/registry/adduser.js": "lib/utils/registry/adduser.js",
    "utils/registry/get.js": "lib/utils/registry/get.js",
    "utils/registry/publish.js": "lib/utils/registry/publish.js",
    "utils/registry/request.js": "lib/utils/registry/request.js",
    "utils/registry/tag.js": "lib/utils/registry/tag.js",
    "utils/registry/unpublish.js": "lib/utils/registry/unpublish.js",
    "index.js": "npm"
  },
  "bin": {
    "npm": "bin/npm.js",
    "read-package-json": "bin/read-package-json.js",
    "semver": "bin/semver.js"
  },
  "files": [
    ""
  ],
  "_defaultsLoaded": true,
  "man": [
    "man1/activate.1",
    "man1/adduser.1",
    "man1/build.1",
    "man1/bundle.1",
    "man1/cache.1",
    "man1/changelog.1",
    "man1/coding-style.1",
    "man1/completion.1",
    "man1/config.1",
    "man1/deactivate.1",
    "man1/deprecate.1",
    "man1/developers.1",
    "man1/docs.1",
    "man1/edit.1",
    "man1/explore.1",
    "man1/faq.1",
    "man1/find.1",
    "man1/folders.1",
    "man1/get.1",
    "man1/init.1",
    "man1/install.1",
    "man1/json.1",
    "man1/link.1",
    "man1/list.1",
    "man1/ln.1",
    "man1/ls.1",
    "man1/npm.1",
    "man1/outdated.1",
    "man1/owner.1",
    "man1/publish.1",
    "man1/rebuild.1",
    "man1/registry.1",
    "man1/restart.1",
    "man1/rm.1",
    "man1/run-script.1",
    "man1/scripts.1",
    "man1/search.1",
    "man1/set.1",
    "man1/start.1",
    "man1/stop.1",
    "man1/test.1",
    "man1/tag.1",
    "man1/uninstall.1",
    "man1/unpublish.1",
    "man1/update.1",
    "man1/version.1",
    "man1/view.1",
    "man1/future-ideas/deploy.1",
    "man1/future-ideas/new-module-system.1",
    "man1/future-ideas/remote.1",
    "man1/future-ideas/site.1"
  ],
  "dist": {
    "shasum": "30ff8200a2f2f5a983b2b6cb793d43dafe489ce6"
  },
  "_bundledDeps": [],
  "_resolvedDeps": [],
  "_npmConfig": {
    "argv": {
      "remain": [
        "npm"
      ],
      "cooked": [
        "update",
        "npm"
      ],
      "original": [
        "update",
        "npm"
      ]
    },
    "showlevel": 1,
    "registry": "http://registry.npmjs.org/",
    "update-dependents": true,
    "auto-activate": "always",
    "auto-deactivate": true,
    "binroot": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/bin",
    "browser": "open",
    "color": true,
    "description": true,
    "dev": false,
    "force": false,
    "globalconfig": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/etc/npmrc",
    "gzipbin": "gzip",
    "listopts": "",
    "logfd": 2,
    "loglevel": "info",
    "manroot": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/share/man",
    "must-install": true,
    "node-version": "v0.3.8",
    "onload-script": false,
    "outfd": 1,
    "proxy": null,
    "rebuild-bundle": true,
    "recursive": false,
    "root": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/lib/node",
    "tag": "latest",
    "tar": "tar",
    "tmproot": "/var/folders/tQ/tQPTAN9gF-4tWJxTdAMZok+++TI/-Tmp-/",
    "userconfig": "/Users/BK30/.npmrc"
  },
  "_env": {},
  "_npmPaths": {
    "root": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/lib/node",
    "dir": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/lib/node/.npm",
    "cache": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/lib/node/.npm/.cache",
    "tmp": "/var/folders/tQ/tQPTAN9gF-4tWJxTdAMZok+++TI/-Tmp-/npm-1297390168139",
    "package": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/lib/node/.npm/npm/0.2.18/package",
    "modules": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/lib/node/npm@0.2.18",
    "dependencies": "/Users/BK30/Documents/Work/BrownBag/jumbotron-0.2/local/lib/node/.npm/npm/0.2.18/node_modules"
  }
}
