using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class Ratings : BaseModel
{
    [JsonPropertyName("records")] public Dictionary<string, RatingData> Records { get; set; }
}

public class RatingData
{
    [JsonPropertyName("bad")] public int Bad { get; set; }
    [JsonPropertyName("chats")] public int Chats { get; set; }
    [JsonPropertyName("good")] public int Good { get; set; }
}