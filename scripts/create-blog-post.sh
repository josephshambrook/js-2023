#!/bin/sh

echo "    __    _      __\n   / /   (_)___  \ \ \n  | |    | / __|  | |\n < <     | \__ \   > >\n  | |   _/ |___/  | |\n   \_\ |__/      /_/\n"

LAYOUT_DEFAULT="BlogPost.astro"

# TODO: user chooses from list of layouts in folder, rather than entering the name themselves
LAYOUT=$(gum input --value "$LAYOUT_DEFAULT" --placeholder "Expecting the filename here, which must be in the src/layouts folder")

TITLE_DEFAULT=""

TITLE=$(gum input --value "$TITLE_DEFAULT" --placeholder "A title for the blog post")
