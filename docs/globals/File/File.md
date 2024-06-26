A global API that contains features to work with files

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

### <code>allowed()</code> \{#allowed}

Checks if FileAPI can be used for this avatar

```lua
allowed()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>delete()</code> \{#delete}

Deletes file/directory at specified path. Returns true if successful

```lua
delete(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>exists()</code> \{#exists}

Checks if file/directory at specified path exists

```lua
exists(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>isDirectory()</code> \{#isDirectory}

Checks if specified path is directory

```lua
isDirectory(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>isFile()</code> \{#isFile}

Checks if specified path is file

```lua
isFile(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>isPathAllowed()</code> \{#isPathAllowed}

Checks if this path is allowed for usage

```lua
isPathAllowed(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>list()</code> \{#list}

Lists all files and directories at specified path, or returns null if directory does not exist or path is not a directory

```lua
list(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>mkdir()</code> \{#mkdir}

Creates a directory at specified path. Returns true if folder was successfully created

```lua
mkdir(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>mkdirs()</code> \{#mkdirs}

Creates a directory at specified path including all parent directories. Returns true if folder was successfully created

```lua
mkdirs(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>openReadStream()</code> \{#openReadStream}

Opens an input stream for file at specified path

```lua
openReadStream(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[InputStream](/globals/Data/InputStream)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>openWriteStream()</code> \{#openWriteStream}

Opens an output stream for file at specified path

```lua
openWriteStream(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                    | Description |
| ------------------------------------------------------- | ----------- |
| <code>[OutputStream](/globals/Data/OutputStream)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readString()</code> \{#readString}

Reads whole file as string

```lua
readString(path, encoding)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| path     | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| encoding | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeString()</code> \{#writeString}

Writes a string to a file

```lua
writeString(path, data, encoding)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| path     | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| data     | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| encoding | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---
