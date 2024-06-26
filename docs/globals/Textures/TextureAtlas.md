A texture atlas object, with helper functions related to a texture atlas

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

For this entire page assume:

```lua
local myAtlas = client.getAtlas(client.listAtlases()[1])
```

---

### <code>getHeight()</code> \{#getHeight}

Returns the height of this atlas

```lua
getHeight()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myAtlas:getHeight()
```

---

### <code>getSpriteUV()</code> \{#getSpriteUV}

Returns a vec4 containing the UV of the given sprite

The UV is ordered as U0, V0, U1, V1

```lua
getSpriteUV(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**Example:**

```lua
myAtlas:getSpriteUV(myAtlas:listSprites()[1])
```

---

### <code>getWidth()</code> \{#getWidth}

Returns the width of this atlas

```lua
getWidth()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myAtlas:getWidth()
```

---

### <code>listSprites()</code> \{#listSprites}

Returns a table with all sprite paths under this atlas

```lua
listSprites()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
myAtlas:listSprites()
```

---
