namespace iRon
{
    public class Excercise
    {
        public string Name { get; set; } = "New Excercise";
        public int PerceivedExcertion { get; set; }
    }
    public class StrengthExcercise : Excercise
    {
        public int Weight { get; set; }
        public int Repetitions { get; set; }
        public string? MuscleGroup { get; set; }
    }
    public class ConditioningExcercise : Excercise
    {
        public int? GoalTime { get; set; }
        public int? GoalPace { get; set; }
        public int? GoalDistance { get; set; }
    }
}

