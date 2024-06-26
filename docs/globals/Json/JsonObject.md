JSON object, basically a table but more restricted to match JSON objects

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

### <code>get()</code> \{#get}

Returns value bound to specified key. Consider using containsKey before, as object can contain nil values unlike regular table

```lua
get(key)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| key  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>clear()</code> \{#clear}

Clears this object

```lua
clear()
```

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>containsKey()</code> \{#containsKey}

Does this object contains specified key

```lua
containsKey(key)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| key  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>containsValue()</code> \{#containsValue}

Does this object contains specified value

```lua
containsValue(value)
```

**Parameters:**

| Name  | Type                 | Description | Default |
| ----- | -------------------- | ----------- | ------- |
| value | <code>AnyType</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>put()</code> \{#put}

Puts provided value at specified key

```lua
put(key, value)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| key   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| value | <code>AnyType</code>                            | -           | -       |

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>remove()</code> \{#remove}

Remove value with specified key from object

```lua
remove(key)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| key  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>size()</code> \{#size}

Returns size of this object

```lua
size()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---
