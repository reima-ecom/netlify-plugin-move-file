# Netlify Plugin to Move File into Publish Directory

Build plugin to move a file into the publish directory. Very useful in order to move logs etc.

## Installation and Configuration

There are two ways to install a plugin on a Netlify site: with the Netlify UI or with file-based installation.

### UI-based Installation

Currently not supported.

### File-based Installation

1. Create a `netlify.toml` in the root of your project. Your file should include the plugins section below:

    ```toml
    [build]
      command = "hugo --logFile hugo-log.txt"
      publish = "public"

    [[plugins]]
      package = "netlify-plugin-move-file"
        [plugins.inputs]
        filePath = "hugo-log.txt"
    ```

2. From your project's base directory, use `npm`, `yarn`, or any other Node.js package manager to add this plugin to `devDependencies` in `package.json`.

    ```
    npm install -D netlify-plugin-move-file
    ```

    or

    ```
    yarn add -D netlify-plugin-move-file
    ```

Read more about [file-based plugin installation](https://docs.netlify.com/configure-builds/build-plugins/#file-based-installation) in our docs.

### Configuration

Specify the file to move via the `filePath` input.