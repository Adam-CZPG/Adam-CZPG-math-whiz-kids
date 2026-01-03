{
  "name": "MemoryGameProgress",
  "type": "object",
  "properties": {
    "games_played": {
      "type": "number",
      "default": 0,
      "description": "Total memory games played"
    },
    "best_time": {
      "type": "number",
      "default": 999,
      "description": "Best time in seconds"
    },
    "best_moves": {
      "type": "number",
      "default": 999,
      "description": "Fewest moves to complete"
    },
    "total_wins": {
      "type": "number",
      "default": 0,
      "description": "Total games won"
    },
    "current_difficulty": {
      "type": "string",
      "enum": [
        "easy",
        "medium",
        "hard"
      ],
      "default": "easy",
      "description": "Current difficulty level"
    }
  },
  "required": []
}